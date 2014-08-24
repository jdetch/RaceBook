# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Race.delete_all
Image.delete_all
User.delete_all

User.create!(
  id: 1,
  username: 'test',
  email: 'test@test.com',
  password: 'password'
  )

Race.create!(
  name: '8th Annual Thompson Island 4K Trail Run 2008',
  city: 'Boston',
  state: 'MA',
  date: '2008-09-04',
  race_type: '4k',
  time: 1663,
  place_agegroup:87,
  place_gender: 92,
  place_overall: 219,
  note: 'First Thompson Island run',
  user_id: 1)

Race.create!(
  name: 'Great Bay Half Marathon 2009',
  city: 'New Market',
  state: 'NH',
  date: '2009-04-05',
  race_type: 'Half Marathon',
  time: 9739,
  place_agegroup: 67,
  place_gender: 615,
  place_overall: 1204,
  note: '',
  user_id: 1)

Race.create!(
  name: 'Boston Marathon 2009',
  city: 'Boston',
  state: 'MA',
  date: '2009-04-20',
  race_type: 'Marathon',
  time: 18697,
  place_agegroup: 4798,
  place_gender: 8866,
  place_overall: 22015,
  note: '',
  user_id: 1)

Race.create!(
  name: 'JP Morgan Corporate Challenge 2009',
  city: 'Boston',
  state: 'MA',
  date: '2009-06-25',
  race_type: '3.5 Miles',
  time: 2210,
  place_agegroup: 646,
  place_gender: 657,
  place_overall: 2003,
  note: '',
  user_id: 1)

Race.create!(
  name: '22nd Annual Jim Kane Sugar Bowl 5 Miler',
  city: 'Boston',
  state: 'MA',
  date: '2009-07-16',
  race_type: '5 Miles',
  time: 3034,
  place_agegroup: 50,
  place_gender: 411,
  place_overall: 923,
  note: '',
  user_id: 1)

Race.create!(
  name: 'Blessing of the Fleet 10 Mile Road Race 2009',
  city: 'Narragansett',
  state: 'RI',
  date: '2009-07-24',
  race_type: '10 Miles',
  time: 6581,
  place_agegroup: 273,
  place_gender: 970,
  place_overall: 2410,
  note: '',
  user_id: 1)

Race.create!(
  name: '9th Annual Thompson Island 4K Trail Run 2009',
  city: 'Boston',
  state: 'MA',
  date: '2009-09-17',
  race_type: '4k',
  time: 1458,
  place_agegroup: 92,
  place_gender: 92,
  place_overall: 261,
  note: '',
  user_id: 1)

Race.create!(
  name: 'Harwich Cranberry Harvest Half Marathon',
  city: 'Harwich',
  state: 'MA',
  date: '2009-10-04',
  race_type: 'Half Marathon',
  time: 9092,
  place_agegroup: 17,
  place_gender: 313,
  place_overall: 597,
  note: '',
  user_id: 1)

Race.create!(
  name: 'JP Morgan Corporate Challenge 2010',
  city: 'Boston',
  state: 'MA',
  date: '2010-06-24',
  race_type: '3.5 Miles',
  time: 2276,
  place_agegroup: 2511,
  place_gender: 2546,
  place_overall: 6948,
  note: '',
  user_id: 1)

Race.create!(
  name: 'Blessing of the Fleet 10 Mile Road Race 2010',
  city: 'Narragansett',
  state: 'RI',
  date: '2010-07-23',
  race_type: '10 Miles',
  time: 7144,
  place_agegroup: 221,
  place_gender: 1147,
  place_overall: 2592,
  note: '',
  user_id: 1)

Race.create!(
  name: 'JP Morgan Corporate Challenge 2011',
  city: 'Boston',
  state: 'MA',
  date: '2011-06-02',
  race_type: '3.5 Miles',
  time: 1963,
  place_agegroup: 1568,
  place_gender: 1568,
  place_overall: 5279,
  note: '',
  user_id: 1)

Race.create!(
  name: 'Memphis Soul 5k 2011',
  city: 'Somerville',
  state: 'MA',
  date: '2011-10-16',
  race_type: '5k',
  time: 1876,
  place_agegroup: 66,
  place_gender: 214,
  place_overall: 454,
  note: '',
  user_id: 1)

Race.create!(
  name: 'Thompson Island 4K Trail Race 2012',
  city: 'Boston',
  state: 'MA',
  date: '2012-09-19',
  race_type: '4k',
  time: 1346,
  place_agegroup: 134,
  place_gender: 134,
  place_overall: 544,
  note: '',
  user_id: 1)

Race.create!(
  name: 'Shipyard Old Port Half Marathon',
  city: 'Portland',
  state: 'ME',
  date: '2013-07-14',
  race_type: 'Half Marathon',
  time: 9960,
  place_agegroup: 235,
  place_gender: 927,
  place_overall: 1517,
  note: '',
  user_id: 1)

Race.create!(
  name: 'Blessing of the Fleet 10 Mile Road Race 2013',
  city: 'Narragansett',
  state: 'RI',
  date: '2013-07-26',
  race_type: '10 Miles',
  time: 6015,
  place_agegroup: 130,
  place_gender: 853,
  place_overall: 2022,
  note: '',
  user_id: 1)

Race.create!(
  name: 'NYCRUNS Frozen Penguin Half Marathon',
  city: 'New York',
  state: 'NY',
  date: '2013-07-26',
  race_type: 'Half Marathon',
  time: 8595,
  place_agegroup: 61,
  place_gender: 127,
  place_overall: 282,
  note: '',
  user_id: 1)



