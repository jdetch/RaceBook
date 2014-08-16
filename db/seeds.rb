# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Race.delete_all
Image.delete_all

Race.create!(name: 'Blessing of the fleet', city: 'Narragansett', state: 'RI', date: '07/24/2013', time: 100, place_agegroup: 35, place_gender: 88, place_overall: 100, note: 'This race was awesome!')

Image.create!(filename: 'fake.jpg', race_id: 1)
