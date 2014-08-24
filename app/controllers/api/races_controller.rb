class Api::RacesController < Api::ApiController
  before_filter :restrict_access

  def index
    respond_with @currentUser.races
  end

  def create
    race = Race.new(race_params)
    race.user = @currentUser
    if race.save
      render json: race, status: :created
    else
      respond_with race
    end
  end

  def show
    render json: Race.where(id: params[:id], user: @currentUser)
  end

  def update
    race = Race.where(id: params[:id], user: @currentUser).first

    race.update_attributes(race_params)
    render json: race
  end

  def destroy
    race = Race.where(params[:id], user: @currentUser)
    if race
      Race.destroy(params[:id])
      render json: nil
    else
      render json: nil, :status => 404
    end
  end

  private

  def race_params
      params.require(:race).permit(:name, :city, :state, :date, :race_type, :time, :place_agegroup, :place_gender, :place_overall, :note)
  end

end
