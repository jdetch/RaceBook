class Race < ActiveRecord::Base
  belongs_to :user
  has_many :images

  after_validation :geocode
  geocoded_by :address, :latitude  => :latitude, :longitude => :longitude # ActiveRecord

  def address
    [city, state].compact.join(', ')
  end

end
