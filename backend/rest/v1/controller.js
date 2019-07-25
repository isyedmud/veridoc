import async from 'async';
import Guid from 'guid';
import AccountKit from 'node-accountkit';
import config from './../../config';
import { signToken } from './../auth.service';

import { User, Attachment, UserRequest, Review, ExpertComment, PaymentOption, ExtraComment, RequestStatus } from './../../models';
import { read } from 'fs';
import { resolveSoa } from 'dns';
import { from } from 'rxjs';
import nodemailer from 'nodemailer';
import md5 from 'md5';
import path from 'path';
import schedule from 'node-schedule';

// var csrf_guid = Guid.raw();

const {
  RESPONSE_CODES: { SUCCESS, UNAUTHORIZED, INVALID_BODY }
} = config;

export function register(req, res, next) {
  async.waterfall(
    [
      function() {

        if (req.body.role === undefined) {
          const errors = {
            role: 'Role is required'
          };
          return res.status(INVALID_BODY.CODE).send({
            code: INVALID_BODY.CODE,
            message: INVALID_BODY.MESSAGE,
            errors
          });
        }

        if (!req.body.email) {
          const errors = {
            email: 'Email is required'
          };
          return res.status(INVALID_BODY.CODE).send({
            code: INVALID_BODY.CODE,
            message: INVALID_BODY.MESSAGE,
            errors
          });
        }

        // AccountKit.getAccountInfo(req.body.authorization_code, (err, resp) => {
          // if (resp) {
        const newUser = User({
          email: req.body.email,
          role: req.body.role,
          fname: req.body.fname,
          lname: req.body.lname,
          birthday: req.body.birthday,
          username: req.body.username,
          password: req.body.password,
          paymentoption: req.body.paymentoption,
          title: req.body.title,
          headline: req.body.headline,
          experiencedyear: req.body.experiencedyear,
          category: req.body.category,
          avatar: req.body.avatar,
          expertbio: req.body.expertbio,
          expertschool: req.body.expertschool,
          expertresidency: req.body.expertresidency,
          expertinternship: req.body.expertinternship,
          expertdegree: req.body.expertdegree,
          expertaward: req.body.expertaward
        });

        return User.findOne({
          email: req.body.email,
        })
          .exec((err, user) => {
            if (err) {
              return res.status(400).send({ status: 400, message: err });
            }
            if (user) {
              //If the user already exists but they lost track of their authentication token, sign a new token and return the user data
              return res.status(400).send({status: 400, message: "User is already Exists!"});
            } else {
              //User does not exist, create a new user
              return newUser.save().then(obj => {
                // const token = signToken(obj.accountKitId, obj._id);
                User.findOne({ _id: obj._id }, (err, user) => {
                  if (err) {
                    return res
                      .status(400)
                      .send({ status: 400, message: err });
                  }
                  if (user) {
                    // user.authenticationToken = token;
                    return user.save().then(obj => {
                      res.status(200).json({ status: 200, user });
                    });
                  }
                  return res.status(400).send({
                    status: 400,
                    message: 'Can not find user with that id'
                  });
                });
              })
              .catch(err => {
                return res.status(400).send({
                  status: 400,
                  err
                });
              });
            }
          });
      }
    ],
    err => next(err)
  );
}

export function login(req, res, next) {
  async.waterfall([
    function() {
      if (!req.body.email) {
        const errors = {
          email: 'email is required'
        };
        return res.status(INVALID_BODY.CODE).send({
          code: INVALID_BODY.CODE,
          message: INVALID_BODY.MESSAGE,
          errors
        });
      }

      if (!req.body.password) {
        const errors = {
          password: 'Password is required'
        };
        return res.status(INVALID_BODY.CODE).send({
          code: INVALID_BODY.CODE,
          message: INVALID_BODY.MESSAGE,
          errors
        });
      }

      User.findOne({ email: req.body.email, password: req.body.password })
        .exec((err, user) => {
          if (err) {
            return res.status(400).send({ status: 400, error: err });
          }
          if (user) {
            return res.status(200).send({ status: 200, user });
          } else {
            return res
              .status(400)
              .send({ status: 400, message: 'User does not exist!' });
          }
        });
    }
  ]);
}

export function restPassword(req, res, next) {
  async.waterfall([
    function() {
      if (!req.body.email) {
        const errors = {
          email: 'email is required'
        };
        return res.status(INVALID_BODY.CODE).send({
          code: INVALID_BODY.CODE,
          message: INVALID_BODY.MESSAGE,
          errors
        });
      }

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'talent.it830@gmail.com',
          pass: 'talent123!'
        }
      });
      
      var mailOptions = {
        from: 'support@veridoc.com',
        to: req.body.email,
        subject: 'Password has been changed.',
        text: "Your password is reset to 'veridoc'. Now you can login with this password. \nFrom support@veridoc.com"
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          return res.status(400).send({ status: 400, error: error });
        } else {
          User.updateOne({email: req.body.email}, {password: md5('veridoc')})
            .then(() => {
              return res.status(200).send({ status: 200, message: "Password Reset Email sent!" });
            })
            .catch(err => {
              return res.status(400).send({ status: 400, err });
            })
        }
      });
    }
  ]);
}

export function getUser(req, res, next) {
  async.waterfall([
    function() {
      if (!req.body.uid) {
        const errors = {
          uid: 'UID is required'
        };
        return res.status(INVALID_BODY.CODE).send({
          code: INVALID_BODY.CODE,
          message: INVALID_BODY.MESSAGE,
          errors
        });
      }

      User.findOne({ _id: req.body.uid })
        .populate("paymentoption")
        .exec((err, user) => {
          if (err) {
            return res.status(400).send({ status: 400, error: err });
          }
          if (user) {
            return res.status(200).send({ status: 200, user });
          } else {
            return res
              .status(400)
              .send({ status: 400, message: 'User does not exist!' });
          }
        });
    }
  ]);
}

export function updateUser(req, res, next) {
  async.waterfall([
    function() {
      if(!req.body.user.uid || req.body.user.uid == "") {
        const errors = {
          uid: "UID is required"
        };
        return res.status(INVALID_BODY.CODE).send({
          code: INVALID_BODY.CODE,
          message: INVALID_BODY.MESSAGE,
          errors
        });
      }

      User.updateOne({_id: req.body.user.uid}, {...req.body.user})
        .then(() => {
          return res.status(200).send({status: 200, message: "Profile is updated!"});
        })
        .catch(error => {
          return res.status(400).send({ status: 400, error });
        })
    }
  ]);
}

export function deleteUser(req, res, next) {
  async.waterfall([
    function() {
      if(!req.body.uid || req.body.uid == "") {
        const errors = {
          uid: "UID is required"
        };
        return res.status(INVALID_BODY.CODE).send({
          code: INVALID_BODY.CODE,
          message: INVALID_BODY.MESSAGE,
          errors
        });
      }

      if(!req.body.role) {
        const errors = {
          uid: "User role is required"
        };
        return res.status(INVALID_BODY.CODE).send({
          code: INVALID_BODY.CODE,
          message: INVALID_BODY.MESSAGE,
          errors
        });
      }

      User.findOneAndDelete({_id: req.body.uid})
        .then(() => {
          if(Number(req.body.role) == 0) {
            UserRequest.remove({user: req.body.uid})
            .then(() => {
              return res.status(200).send({status: 200, message: "User deleted!"});
            })
            .catch((error) => {
              return res.status(400).send({ status: 400, error });    
            })
          } else {
            return res.status(200).send({status: 200, message: "User deleted!"});
          }
        })
        .catch(err => {
          return res.status(400).send({ status: 400, err });
        })
    }
  ]);
}

export function getUsers(req, res, next) {
  async.waterfall([
    function() {
      User.find({role: req.body.role})
        .then((data) => {
          return res.status(200).send({ status: 200, data });
        })
        .catch((error) => {
          return res.status(400).send({ status: 400, error });
        });
    }
  ])
}

export function getAllUser(req, res, next) {
  async.waterfall([
    function() {
      User.find({})
        .then((data) => {
          return res.status(200).send({ status: 200, data });
        })
        .catch((error) => {
          return res.status(400).send({ status: 400, error });
        })
    }
  ])
}

export function acceptUser(req, res, next) {
  async.waterfall([
    function() {
      User.updateOne({_id: req.body.uid}, {isverified: true})
        .then((data) => {
          return res.status(200).send({ status: 200, data });
        })
        .catch((error) => {
          return res.status(400).send({ status: 400, error });
        })
    }
  ])
}

export function postRequest(req, res, next) {
  async.waterfall([
    function() {
      const postData = new UserRequest(req.body.post);
      UserRequest.findOne({status: 0, user: req.body.post.user})
        .then((request) => {
          if(request) {
            UserRequest.updateOne({_id: request._id}, {
              comments: postData.comments,
              extracomment: postData.extracomment,
              queries: postData.queries,
              status: postData.status,
              paymentStatus: postData.paymentStatus,
              files: postData.files,
              category: postData.category,
              isbehalfof: postData.isbehalfof,
              behalfofname: postData.behalfofname,
              behalfofrelation: postData.behalfofrelation,
              behalfofbod: postData.behalfofbod,
              behalfofgender: postData.behalfofgender,
              behalfofcountry: postData.behalfofcountry,
              trackRequest: postData.trackRequest
            })
              .then((data) => {
                return res.status(200).send({ status: 200, data });
              })
              .catch((err) => {
                return res.status(400).send({
                  status: 400,
                  err
                });      
              })
          } else {
            postData.save()
            .then((data) => {
              return res.status(200).send({ status: 200, data });
            })
            .catch(err => {
              return res.status(400).send({
                status: 400,
                err
              });
            })
          }
        })
        .catch((error) => {
          return res.status(400).send({
            status: 400,
            error
          });
        })
    }
  ]);
}

export function getRequest(req, res, next) {
  async.waterfall([
    function() {
      if(!req.body.uid || req.body.uid == "") {
        const errors = {
          uid: "UID is required"
        };
        return res.status(INVALID_BODY.CODE).send({
          code: INVALID_BODY.CODE,
          message: INVALID_BODY.MESSAGE,
          errors
        });
      }
      const uid = req.body.uid;
      UserRequest.find({user: uid})
        .populate({ path: 'files' })
        .populate({ path: 'user' })
        .exec((err, data) => {
          if (err) {
            return res.status(400).send({ status: 400, error: err });
          }
          if (data) {
            return res.status(200).send({ status: 200, data });
          } else {
            return res
              .status(400)
              .send({ status: 400, message: 'No requests!' });
          }
        })
    }
  ])
}

export function getAllRequests(req, res, next) {
  async.waterfall([
    function() {
      const expertId = req.body.expertId;
      if(expertId == "") {
        UserRequest.find()
          .populate({path: 'files'})
          .populate({path: 'user'})
          .exec((err, data) => {
            if (err) {
              return res.status(400).send({ status: 400, error: err });
            }
            return res.status(200).send({ status: 200, data });
          })
      } else {
        UserRequest.find({expert: expertId})
        .populate({path: 'files'})
        .exec((err, data) => {
          if (err) {
            return res.status(400).send({ status: 400, error: err });
          }
          return res.status(200).send({ status: 200, data });
        })
      }
    }
  ])
}

export function setExpert(req, res, next) {
  async.waterfall([
    function() {
      UserRequest.updateOne({_id: req.body.requestId}, {expert: req.body.expertId})
        .then((data) => {
          let startTime = new Date();
          console.log("Added", startTime);
          let endTime = new Date(startTime.setDate(startTime.getDate() + 1));
          var j = schedule.scheduleJob({ start: startTime, end: endTime, rule: '* */24 * * *' }, function(){
            UserRequest.findOne({_id: req.body.requestId})
              .then((reqdata) => {
                if(!reqdata.expertCommentId) {
                  UserRequest.updateOne({_id: req.body.requestId}, {$unset: {expert: ""}})
                    .then(() => {
                      console.log("Deleted", endTime);
                      j.cancel();
                    })
                }
              })
          });
          return res.status(200).send({status: 200, message: "Request is updated!"});
        })
        .catch((err) => {
          return res.status(400).send({ status: 400, err });
        })
    }
  ])
}

export function closeRequest(req, res, next) {
  async.waterfall([
    function() {
      if(!req.body.id) {
        const errors = {
          uid: "Item ID is required"
        };
        return res.status(INVALID_BODY.CODE).send({
          code: INVALID_BODY.CODE,
          message: INVALID_BODY.MESSAGE,
          errors
        });
      }

      const requestId = req.body.id;
      UserRequest.updateOne({_id: requestId}, {status: 2})
        .then(() => {
          return res.status(200).send({ status: 200, message: "success" });
        })
        .catch(error => {
          return res.status(400).send({
            status: 400,
            error
          });
        });
    }
  ])
}

export function getRequestById(req, res, next) {
  async.waterfall([
    function() {
      const requestId = req.body.reqId;
      UserRequest.findOne({_id: requestId})
        .populate({path: 'files'})
        .populate({path: 'user'})
        .populate({
          path: 'extracomment',
          populate: {
            path: "uid"
          }
        })
        .populate({
          path: 'extracomment',
          populate: {
            path: "files"
          }
        })
        .populate({path: 'trackRequest'})
        .then((data) => {
          return res.status(200).send({ status: 200, data });
        })
        .catch(error => {
          return res.status(400).send({
            status: 400,
            error
          });
        });
    }
  ])
}

export function uploadAttachment(req, res, next) {
  const attachments = req.files.map((file) => {
    return {
      filename: file.filename,
      originalname: file.originalname,
      type: file.filename.split(".")[1]
    }
  })
  Attachment.insertMany(attachments, (err, result) => {
    if (err) return res.sendStatus(404)
    res.json(result)
  })
}

export function processPayment(req, res, next) {
  async.waterfall([
    function() {
      if(!req.body.requestId) {
        const errors = {
          uid: "Item ID is required"
        };
        return res.status(INVALID_BODY.CODE).send({
          code: INVALID_BODY.CODE,
          message: INVALID_BODY.MESSAGE,
          errors
        });
      }

      const requestId = req.body.requestId;
      UserRequest.updateOne({_id: requestId}, {paymentStatus: 1})
        .then(() => {
          return res.status(200).send({ status: 200, message: "success" });
        })
        .catch(error => {
          return res.status(400).send({
            status: 400,
            error
          });
        });
    }
  ])
}

export function updateStatus(req, res, next) {
  async.waterfall([
    function() {
      UserRequest.findOne({_id: req.body.id})
        .then((userRequest) => {
          userRequest.status = req.body.status;
          userRequest.trackRequest.push(req.body.trackReqId);
          userRequest.save()
            .then(() => {
              return res.status(200).send({ status: 200, message: "success" });
            })
            .catch(error => {
              return res.status(400).send({
                status: 400,
                error
              });
            })
        })
        .catch(error => {
          return res.status(400).send({
            status: 400,
            error
          });
        })
    }
  ])
}

export function downloadAttachment(req, res, next) {
  var filename = req.body.filename;
  var filepath = path.join(__dirname, '../../attachments') + "/" + filename;
  res.sendFile(filepath);
}

export function provideReview(req, res, next) {
  async.waterfall([
    function() {
      const feedback = new Review(req.body.feedback);
      feedback.save()
        .then(() => {
          UserRequest.findOne({_id: req.body.feedback.requestId})
            .then((userRequest) => {
              userRequest.status = 4;
              userRequest.trackRequest.push(req.body.feedback.trackReqId);
              userRequest.save()
                .then(() => {
                  return res.status(200).send({ status: 200, message: "success" });
                })
                .catch((error) => {
                  return res.status(400).send({
                    status: 400,
                    error
                  });  
                })
            });
        })
        .catch(err => {
          return res.status(400).send({
            status: 400,
            err
          });
        });
    }
  ])
}

export function provideExpertComment(req, res, next) {
  async.waterfall([
    function() {
      const expertComment = new ExpertComment(req.body.comment);
      expertComment.save()
        .then((data) => {
          UserRequest.findOne({_id: req.body.comment.requestId})
            .then((userRequest) => {
              userRequest.trackRequest.push(req.body.comment.trackReqId);
              userRequest.status = 3;
              userRequest.expertCommentId = data._id;
              userRequest.save()
                .then(() => {
                  return res.status(200).send({ status: 200, message: "success" });
                })
                .catch(error => {
                  return res.status(400).send({
                    status: 400,
                    error
                  });
                })
            })
            .catch(error => {
              return res.status(400).send({
                status: 400,
                error
              });
            })
        })
        .catch((error) => {
          return res.status(400).send({
            status: 400,
            error
          });
        })
    }
  ])
}

export function provideInput(req, res, next) {
  async.waterfall([
    function() {
      const extraComment = new ExtraComment(req.body.extra);
      extraComment.save()
        .then((data) => {
          UserRequest.findById(req.body.reqId, function(error, userRequest) {
            if(error) return res.status(400).send({status: 400, error});
            userRequest.extracomment.push(data._id);
            if(req.body.extra.role == "1") {
              userRequest.status = 2;
            } else if(req.body.extra.role == "0") {
              userRequest.status = 1;
            }
            userRequest.trackRequest.push(req.body.extra.trackRequestId);
            userRequest.save()
              .then(() => {
                return res.status(200).send({ status: 200, message: "success" });
              })
              .catch(error => {
                return res.status(400).send({status: 400, error});
              })
          });
        })
        .catch(error => {
          return res.status(400).send({
            status: 400,
            error
          });
        })
    }
  ]);
}

export function getReviewByExpertId(req, res, next) {
  async.waterfall([
    function() {
      Review.find({expertsId: req.body.expertId})
      .populate({ path: 'expertsId' })
      .populate({ path: 'userId' })
      .exec((err, data) => {
        console.log(data);
        if (err) {
          return res.status(400).send({ status: 400, error: err });
        }
        if (data && data.length > 0) {
          return res.status(200).send({ status: 200, data });
        } else {
          User.find({_id: req.body.expertId})
            .then((data) => {
              return res.status(200).send({ status: 200, data });
            })
            .catch(error => {
              return res.status(400).send({ status: 400, error });
            })
        }
      })
    }
  ])
}

export function savePaymentOption(req, res, next) {
  async.waterfall([
    function() {
      PaymentOption.findOne({userid: req.body.userid})
        .then((data) => {
          if(data) {
            PaymentOption.updateOne({userid: req.body.userid}, {method: req.body.method, accountholdername: req.body.accountholdername, accountnumber: req.body.accountnumber, ifsccode: req.body.ifsccode, bankname: req.body.bankname, bankaddress: req.body.bankaddress})
              .then(() => {
                User.updateOne({_id: req.body.userid}, {paymentoption: data._id})
                  .then(() => {
                    return res.status(200).send({ status: 200, message: "success" });
                  })
                  .catch((error) => {
                    return res.status(400).send({ status: 400, error });
                  })
              })
              .catch(error => {
                return res.status(400).send({ status: 400, error });
              })
          } else {
            const newOption = PaymentOption({
              method: req.body.method,
              accountholdername: req.body.accountholdername,
              accountnumber: req.body.accountnumber,
              ifsccode: req.body.ifsccode,
              bankname: req.body.bankname,
              bankaddress: req.body.bankaddress,
              userid: req.body.userid
            });
            newOption.save()
              .then((data) => {
                User.updateOne({_id: req.body.userid}, {paymentoption: data._id})
                  .then(() => {
                    return res.status(200).send({ status: 200, message: "success" });
                  })
                  .catch((error) => {
                    return res.status(400).send({ status: 400, error });    
                  })
              })
              .catch(error => {
                return res.status(400).send({ status: 400, error });
              })
          }
        })
        .catch(error => {
          return res.status(400).send({ status: 400, error });
        })
    }
  ])
}

export function getHighlighted(req, res, next) {
  async.waterfall([
    function() {
      User.find({highlight: true})
      .then((data) => {
        return res.status(200).send({ status: 200, data });
      })
      .catch((error) => {
        return res.status(400).send({ status: 400, error });
      })     
    }
  ])
}

export function assignCategory(req, res, next) {
  async.waterfall([
    function() {
      UserRequest.updateOne({_id: req.body.requestId}, {category: req.body.categoryId})
        .then(() => {
          return res.status(200).send({status: 200, message: "User deleted!"});
        })
        .catch((error) => {
          return res.status(400).send({status: 400, error});
        })
    }
  ])
}

export function getRequestByStatus(req, res, next) {
  async.waterfall([
    function() {
      UserRequest.find({user: req.body.uid, status: req.body.status})
        .populate({path: 'files'})
        .then((data) => {
          return res.status(200).send({ status: 200, data });
        })
        .catch(error => {
          return res.status(400).send({ status: 400, error });
        })
    }
  ])
}

export function saveRequestStatus(req, res, next) {
  async.waterfall([
    function() {
      const requestStatus = RequestStatus({
        status: req.body.status
      });
      requestStatus.save()
        .then(data => {
          return res.status(200).send({ status: 200, data });
        })
        .catch(error => {
          return res.status(400).send({ status: 400, error });
        })
    }
  ])
}