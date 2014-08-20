# Models

## race
* name
* city
* state
* date
* race_type
* time
* place_agegroup
* place_gender
* place_overall
* note
belongs_to :user
has_many :images

## image
* filename
belongs_to :race

## user
has_many :races
