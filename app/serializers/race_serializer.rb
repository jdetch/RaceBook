class RaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :date, :race_type, :time, :place_agegroup, :place_gender, :place_overall, :note
  has_many :images
end

