'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {userId:1,businessId:2,rating:5,answer:'This is the program you want your kid in. Marbury, Mullin, Bassy, Mashburn, Kyrie, Rod Strickland, JR, Chibbs. The list goes on and on.', createdAt: new Date(), updatedAt: new Date()}
      ], {});
 
  },

  down: (queryInterface, Sequelize) => {   
      return queryInterface.bulkDelete('Reviews', null, {});
   
  }
};
