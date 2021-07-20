'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Businesses', [
        { title: 'Pro Hoops Inc', description: 'We are a results-driven basketball training company based in Manhattan, working with teams and individuals seeking to gain a competitive advantage.', address:'232 E 103rd St', city:'New York', state:'NY', zip:'10029', location: 'East Harlem', gymImg: 'https://pbs.twimg.com/profile_images/1234479930123132929/S9Uzq9W7_400x400.jpg', createdAt: new Date(), updatedAt: new Date()},
        { title: 'Gauchos Gym', description: 'Gauchos Gym is the home of The New York Gauchos Basketball Program. The Gauchos belong to the Amateur Athletic Union (AAU) and send our teams of skilled athletes to basketball tournaments across the country.', address:'478 Gerard Ave', city:'Bronx', state:'NY', zip:'10451', location: 'Mott Haven', gymImg: 'https://secureservercdn.net/166.62.110.232/1b6.985.myftpupload.com/wp-content/uploads/2016/01/500x500_transperent.png?time=1598293902', createdAt: new Date(), updatedAt: new Date() },
        { title: 'NYC Basketball League', description: 'NYC Basketball is New York\'s top Adult Basketball League and hosts amazing Youth Instructional Basketball Programming.', address:'300 Mercer St', city:'New York', state:'NY', zip:'10003', location: 'Greenwich Village', gymImg: 'https://rob-dev.s3.amazonaws.com/images/box_logo.png', createdAt: new Date(), updatedAt: new Date()},
        { title: 'Basketball City', description: 'Basketball City\'s new 65,000 sq. ft. "state of the art" facility is located on the east side of Manhattan, north of the South Street Seaport. This unique facility features seven basketball courts, a merchandise store, locker rooms, and catering facilities.', address:'299 South St', city:'New York', state:'NY', zip:'10002', location: 'LES', gymImg: 'http://ww1.prweb.com/prfiles/2017/10/27/14854081/BBCl_white_large1.jpg', createdAt: new Date(), updatedAt: new Date()},
        { title: 'SWISH Academy', description: 'Youth Development through Sports', address:'251 Clifton Pl Suite 5', city:'Brooklyn', state:'NY', zip:'11216', location: 'Bedstuy', gymImg: 'https://newyorksportsconnection.com/wp-content/uploads/2020/03/SWISH-Logo-T-240x300.png', createdAt: new Date(), updatedAt: new Date()},
        { title: 'Hooperstown', description: 'Hooperstown is a 20,000+ sq. ft. indoor basketball training facility located in Mount Vernon, New York. We offer year round basketball tournaments, leagues, clinics, camps, birthday parties and individual training for AAU, recreational, and other players of all ages and levels of ability.', address:'300 E Sanford Blvd', city:'Mount Vernon', state:'NY', zip:'10550', location: 'Mount Vernon', gymImg: 'https://newyorksportsconnection.com/wp-content/uploads/2020/03/SWISH-Logo-T-240x300.png', createdAt: new Date(), updatedAt: new Date()},
        { title: 'Island Garden', description: 'A 53,000 square foot facility that is designed to host three basketball games, as well as individual basketball and baseball instruction simultaneously. Has been used by the Knicks, Liberty and NCAA men’s tournament as a practice site.', address:'45 Cherry Valley Ave West', city:'Hempstead', state:'NY', zip:'11552', location: 'Long Island', gymImg: 'https://islandgarden.com/wp-content/uploads/2017/03/IslandGardenLogo.png', createdAt: new Date(), updatedAt: new Date()}], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Businesses', null, {});

  }
};
