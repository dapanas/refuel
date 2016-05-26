/**
 * Refuel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    date: {
      type: 'datetime',
      defaultsTo: function () {
        return new Date();
      }
    },
    currentDistance: {
      type: 'integer',
    },
    cost: {
      type: 'decimal',
    },
    gasOilPrice: {
      type: 'decimal',
    },
    gasOilQuantity: {
      type: 'float',
    },
    gasOilType: {
      type: 'string',
      enum: ["Extra", "Corriente", "Diesel", "GNV"],
    },
    vehicle: {
      model: 'vehicle',
    },
    gasStation: {
      model: 'gasStation',
    },
  }
};

