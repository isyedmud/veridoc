import { Router } from 'express';
import * as controller from './controller';

const createRouter = function() {
  const router = new Router();

  //router.get('/importAttributes', controller.importAttributes);
  //router.get('/importFamilies', controller.importFamilies);
  //router.get('/importCommonNames', controller.importCommonNames);
  //router.get('/importFieldCodes', controller.importFieldCodes);
  //router.get('/importGenusSpecies', controller.importGenusSpecies);
  router.get('/importMembers', controller.importMembers);
  //router.get('/importImages', controller.importImages);
  //router.get('/importPlants', controller.importPlants);
  //router.get('/linkAttributes', controller.linkAttributes);
  //router.get('/linkCommonNames', controller.linkCommonNames);
  router.get('/linkMembers', controller.linkMembers);
  //router.get('/linkPlants', controller.linkPlants);

  return router;
};

module.exports = {
  router: createRouter
};
