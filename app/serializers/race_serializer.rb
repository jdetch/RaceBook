class RaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :date, :type, :time, :place_agegroup, :place_gender, :place_overall, :note, :user
  has_many :images
end

