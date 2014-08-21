class Api::ImagesController < ApplicationController
  respond_to :json

  def index
    race = Race.find(params[:race_id])
    respond_with race.images
  end

  def create
    race = Race.find(params[:race_id])
    @image = race.images.create(race_image: params[:image])
    render json: @image, status: :created
  end

  def show
    render json: Image.find(params[:id])
  end

  def destroy
    image = Image.find(params[:id])
    image.destroy
    render json: nil
  end

end
