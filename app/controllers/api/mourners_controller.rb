class Api::MournersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_mourner, only: [:show, :edit, :update, :destroy]

  # GET /mourners
  # GET /mourners.json
  def index
    @mourners = Mourner.all
  end

  # GET /mourners/1
  # GET /mourners/1.json
  def show
  end

  # GET /mourners/new
  def new
    @mourner = Mourner.new
  end

  # GET /mourners/1/edit
  def edit
  end

  # POST /mourners
  # POST /mourners.json
  def create
    @mourner = Mourner.new(mourner_params)

    if @mourner.save
      render "api/mourners/show"
    else
      render json: @worker.errors.full_messages, status: 422
    end
  end

  # PATCH/PUT /mourners/1
  # PATCH/PUT /mourners/1.json
  def update
    respond_to do |format|
      if @mourner.update(mourner_params)
        format.html { redirect_to @mourner, notice: 'Mourner was successfully updated.' }
        format.json { render :show, status: :ok, location: @mourner }
      else
        format.html { render :edit }
        format.json { render json: @mourner.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /mourners/1
  # DELETE /mourners/1.json
  def destroy
    @mourner.destroy
    respond_to do |format|
      format.html { redirect_to mourners_url, notice: 'Mourner was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mourner
      @mourner = Mourner.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def mourner_params
      params.require(:mourner).permit(:first_name, :last_name, :employer, :job_title, :union)
    end
end
