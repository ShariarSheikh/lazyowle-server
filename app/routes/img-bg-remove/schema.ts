import Joi from 'joi';

export const imageSchema = Joi.object({
  imgData: Joi.object({
    data: Joi.binary().required(),
    contentType: Joi.string().valid('image/jpeg', 'image/png', 'image/webp', 'image/avif').required(),
  }).required(),
});
