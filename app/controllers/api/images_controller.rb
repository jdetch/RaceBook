class Api::ImagesController < Api::ApiController
  before_filter :restrict_access

  def index
    race = Race.where(id: params[:race_id], user: @currentUser)
    respond_with race.images
  end

  def create
    race = Race.where(id: params[:race_id], user: @currentUser).first
    @image = race.images.create(race_image: params[:image])
    render json: @image, status: :created
  end

  def destroy
    #TODO CHECK TO MAKE SURE IMAGE BELONGS TO USER
    image = Image.find(params[:id])
    image.destroy
    render json: nil
  end

end
