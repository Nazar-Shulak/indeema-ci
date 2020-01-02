'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  /**
   * Download yml file of app
   * @param ctx
   * @returns {Promise<void>}
   */
  async downloadYmlApp(ctx){
    const entity = await strapi.services.project.findOne(ctx.params);
    if(!entity.project)
      return ctx.notFound();

    const project = await strapi.services.project.findOne({
      _id: entity.project._id.toString()
    });

    //For non admin roles
    if(user.role.type !== 'administrator' && (!project.user || project.user._id.toString() !== user._id.toString()))
      return ctx.notFound();

    //Get path of file
    const path = require('path');
    const filePath = path.resolve() + `/public/uploads/builds/${project.project_name}/${entity.app_name}/.gitlab-ci.yml`;
    if(!fs.existsSync(filePath))
      return ctx.notFound();

    ctx.body = fs.createReadStream(filePath);
    ctx.attachment(filePath);
  },


  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findApp(ctx) {
    const user = ctx.state.user;

    const entity = await strapi.services.app.findOne(ctx.params);
    if(!entity.project)
      return ctx.notFound();

    const project = await strapi.services.project.findOne({
      _id: entity.project._id.toString()
    });

    //For non admin roles
    if(user.role.type !== 'administrator' && (!project.user || project.user._id.toString() !== user._id.toString()))
      return ctx.notFound();

    return sanitizeEntity(entity, { model: strapi.models.app });
  },
};