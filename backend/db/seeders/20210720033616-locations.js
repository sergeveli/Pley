'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Businesses', [
        { title: 'GYM NYC', description: 'Our mission is to provide you with all the tools you need to reach your fitness goals in a clean, vibrant, engaging environment you will be proud to call your GYM. We won\'t hold you hostage like other fitness clubs, you\'ll want to stay because we care.', location: 'Nolita', createdAt: new Date(), updatedAt: new Date()},
        { title: 'TMPL - Avenue A', description: 'TMPL is a boutique luxury fitness experience unlike any other.', location: 'Alphabet City', createdAt: new Date(), updatedAt: new Date() },
        { title: 'Beast River Fitness', description: 'We believe in fitness! CrossFit is a fitness program containing constantly varied, functional movements performed at high intensity. You will never be bored! We not only offer comprehensive CrossFit workouts, but we also have Yoga, Pilates, Endurance, Open Gym and the Beast River Weightlifting Club.', location: 'Alphabet City', createdAt: new Date(), updatedAt: new Date()},
        { title: 'StuyFitness on 14th', description: 'From heart-pumping cardio workouts to weight-training programs, StuyFitness on 14th brings you everything you\'ve come to expect in a modern gym. The amenities include robust cardio offerings,free weights, group classes, and fitness machines.', location: 'Stuy Town', createdAt: new Date(), updatedAt: new Date()},
        { title: 'Urban Jungle', description: 'At Urban Jungle, we are inspired by the streets of NYC & passionate about bringing our love of fitness to all! Located in the heart of Queens, we specialize in Personal Training and quality fitness programs having led the way in group fitness development since 2009!', location: 'Woodside', createdAt: new Date(), updatedAt: new Date()},
        { title: 'Form Fitness', description: 'Form Fitness Brooklyn is committed to creating a comfortable, motivating and welcoming environment for all, regardless of body type or ability, to learn how to build strength and move well.', location: 'Brooklyn Heights', createdAt: new Date(), updatedAt: new Date()},
        { title: 'Encore Fitness', description: 'Personal Training at Encore Fitness includes a variety of Scientifically proven methods that keep your body guessing and changing. We specialize in sports conditioning, corrective exercise, weight loss, core training, and flexibility.', location: 'Flatiron', createdAt: new Date(), updatedAt: new Date()},
        { title: 'Absolute Power Fitness', description: 'While many see solitude as a benefit, nothing beats reaching your goals with the help and support of other like-minded people in an inviting and healthy setting. Absolute Power Fitness is all about helping you achieve your goals in the company of others working to achieve their own.', location: 'East Williamsburg', createdAt: new Date(), updatedAt: new Date()},
        { title: 'Lifestyle Performance', description: 'We are an independent fitness studio specializing in strength training, weight loss, as well as movement and sports and conditioning training. We also provide nutrition and recovery coaching as well.', location: 'Fort Hamilton', createdAt: new Date(), updatedAt: new Date()},
        { title: 'Chalk Gyms', description: 'Chalk is a gym re-imagined. Unlike the traditional model, we aim to be a school of fitness and health. One where we are all student and teacher--where ideas are shared, communities are built and individual goals are achieved.', location: 'Williamsburg', createdAt: new Date(), updatedAt: new Date()},
        { title: 'Dogpound', description: 'Urban lifestyle and exclusive wellness brand established in 2016, with premium outposts in NYC and LA.', location: 'Tribeca', createdAt: new Date(), updatedAt: new Date()},
        { title: 'CompleteBody', description: 'Complete Body is a fitness & wellness company offering personal training, group fitness classes, yoga, Pilates, martial arts, physical therapy, nutritional counseling, acupuncture and spa services. The company works off of the Complete Body System, a philosophy that deftly fuses the best components of Eastern and Western philosophies on health and wellness to create the most effective combinations for our members.', location: 'FiDi', createdAt: new Date(), updatedAt: new Date()}], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Businesses', null, {});

  }
};
