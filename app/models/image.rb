class Image < ActiveRecord::Base
  belongs_to :race

  # This method associates the attribute ":race_image" with a file attachment
  has_attached_file :race_image,
  styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  },
  path: ":class/:id/:style/:filename"

  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :race_image, :content_type => /\Aimage\/.*\Z/

end
