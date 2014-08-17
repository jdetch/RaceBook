class Api::RacesController < ApplicationController
  respond_to :json

  def index
    respond_with Race.all
  end

  def create
    @race = Race.new(race_params)
    if @race.save
      render json: @race, status: :created
    else
      respond_with @race
    end
  end

  def show
    render json: Race.find(params[:id])
  end

  def update
    race = Race.find(params[:id])

    race.update_attributes(race_params)
    render json: race
  end

  def destroy
    race = Race.find(params[:id])
    race.destroy
    render json: nil
  end

  private

  def race_params
      params.require(:race).permit(:name, :city, :state, :date, :race_type, :time, :place_agegroup, :place_gender, :place_overall, :note)
  end

end
