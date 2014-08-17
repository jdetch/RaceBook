# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Race.delete_all
Image.delete_all

Race.create!(
  name: 'Blessing of the fleet',
  city: 'Narragansett',
  state: 'RI',
  date: '2013-07-24',
  race_type: '5k',
  time: 100,
  place_agegroup: 35,
  place_gender: 88,
  place_overall: 100,
  note: 'This race was awesome!')

Race.create!(
  name: 'Boston Marathon',
  city: 'Boston',
  state: 'MA',
  date: '2009-04-19',
  race_type: 'Marathon',
  time: 300,
  place_agegroup: 1104,
  place_gender: 3000,
  place_overall: 12500,
  note: 'My only marathon')


Image.create!(filename: 'fake.jpg', race_id: 1)
