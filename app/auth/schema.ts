import Joi from 'joi'

export default {
  apiKey: Joi.object()
    .keys({
      ['x-api-key']: Joi.string().required()
    })
    .unknown(true)
}
