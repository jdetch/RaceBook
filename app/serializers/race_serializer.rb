class RaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :date, :race_type, :time, :place_agegroup, :place_gender, :place_overall, :note, :latitude, :longitude
  has_many :images, embed: :objects
end

