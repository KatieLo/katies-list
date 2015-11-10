class DayCaresController < ApplicationController
  before_action :set_day_care, only: [:show, :edit, :update, :destroy]

  # GET /day_cares
  # GET /day_cares.json
  def index
    @day_cares = DayCare.all
  end

  # GET /day_cares/1
  # GET /day_cares/1.json
  def show
  end

  # GET /day_cares/new
  def new
    @day_care = DayCare.new
  end

  # GET /day_cares/1/edit
  def edit
  end

  # POST /day_cares
  # POST /day_cares.json
  def create
    @day_care = DayCare.new(day_care_params)

    respond_to do |format|
      if @day_care.save
        format.html { redirect_to @day_care, notice: 'Day care was successfully created.' }
        format.json { render :show, status: :created, location: @day_care }
      else
        format.html { render :new }
        format.json { render json: @day_care.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /day_cares/1
  # PATCH/PUT /day_cares/1.json
  def update
    respond_to do |format|
      if @day_care.update(day_care_params)
        format.html { redirect_to @day_care, notice: 'Day care was successfully updated.' }
        format.json { render :show, status: :ok, location: @day_care }
      else
        format.html { render :edit }
        format.json { render json: @day_care.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /day_cares/1
  # DELETE /day_cares/1.json
  def destroy
    @day_care.destroy
    respond_to do |format|
      format.html { redirect_to day_cares_url, notice: 'Day care was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_day_care
      @day_care = DayCare.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def day_care_params
      params.require(:day_care).permit(:name, :street, :postcode, :city, :state, :description, :latitude, :longitude, :min_age, :max_age, :has_waitlist, :average_waitlist_time, :group_size, :price_per_week, :price_per_month, :birth_certificate_required, :open_time, :close_time, :website)
    end
end
