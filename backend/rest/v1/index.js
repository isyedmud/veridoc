import { Router } from 'express';
import * as controller from './controller';
import multer from 'multer';

// var upload = multer({
//   dest: 'attachments/',
//   limits: {fileSize: 1000000, files: 10}
// })

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'attachments/')
  },
  filename: function (req, file, cb) {
      var datetimestamp = Date.now();
      cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
  }
});

var upload = multer({
  storage: storage,
  limits: {fileSize: 500097152, files: 10}
})

const createRouter = function () {
  const router = new Router();
  router.post(
    '/user/login',
    controller.login
  );

  router.post(
    '/user/register',
    controller.register
  );

  router.post(
    '/user/restPassword',
    controller.restPassword
  );

  router.post(
    '/user/getUser',
    controller.getUser
  );

  router.post(
    '/user/updateUser',
    controller.updateUser
  );

  router.post(
    '/user/deleteUser',
    controller.deleteUser
  );

  router.post(
    '/post/postRequest',
    controller.postRequest
  );

  router.post(
    '/post/getRequest',
    controller.getRequest
  );

  router.post(
    '/post/closeRequest',
    controller.closeRequest
  );

  router.post(
    '/post/getRequestById',
    controller.getRequestById
  );

  router.post(
    '/post/uploadAttachment',
    upload.array('attachments', 10),
    controller.uploadAttachment
  )

  router.post(
    '/post/getAllRequests',
    controller.getAllRequests
  );

  router.post(
    '/post/setExpert',
    controller.setExpert
  );

  router.post(
    '/post/downloadAttachment',
    controller.downloadAttachment
  );

  router.post(
    '/post/processPayment',
    controller.processPayment
  );

  router.post(
    '/post/updateStatus',
    controller.updateStatus
  )

  router.post(
    '/user/getUsers',
    controller.getUsers
  );

  router.post(
    '/user/getAllUser',
    controller.getAllUser
  );

  router.post(
    '/user/acceptUser',
    controller.acceptUser
  );

  router.post(
    '/review/provideReview',
    controller.provideReview
  );

  router.post(
    '/expert/provideExpertComment',
    controller.provideExpertComment
  );

  router.post(
    '/expert/getHighlighted',
    controller.getHighlighted
  )

  router.post(
    '/post/provideInput',
    controller.provideInput
  );

  router.post(
    '/review/getReviewByExpertId',
    controller.getReviewByExpertId
  );

  router.post(
    '/payment/saveOption',
    controller.savePaymentOption
  );

  router.post(
    '/post/assignCategory',
    controller.assignCategory
  );

  router.post(
    '/post/getRequestByStatus',
    controller.getRequestByStatus
  );

  router.post(
    '/post/saveRequestStatus',
    controller.saveRequestStatus
  )

  return router;
};

module.exports = {
  router: createRouter
};
