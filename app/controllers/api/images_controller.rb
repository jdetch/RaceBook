class Api::ImagesController < ApplicationController
  respond_to :json

  def index
    respond_with Image.all
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      render json: @image, status: :created
    else
      respond_with @image
    end
  end

  def show
    render json: Image.find(params[:id])
  end

  def update
    image = Image.find(params[:id])

    image.update_attributes(image_params)
    render json: image
    # if @image.save
    #   flash[:notice] = "Your image was sucessfully created"
    #   redirect_to(@image)
    # else
    #   flash.now[:alert] = "Your image was not able to be saved"
    #   redirect_to :back
    # end
  end

  def destroy
    image = Image.find(params[:id])
    image.destroy
    render json: nil
  end

  private

  def image_params
    params.require(:image).permit(:race_image)
  end
end
