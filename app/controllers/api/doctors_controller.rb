class Api::DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show, :update, :destroy]

  def index
    render json: @doctor
  end

  def show
    render json: @doctor
  end

  def create
    @doctor = @doctor.new(doctor_params)
    if @doctor.save 
      render json: @doctor
    else
      render json: { errors: @doctor.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @doctor.update(doctor_params)
      render json: @doctor
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @doctor.destroy
    render json: { message: 'Doctor Deleted' }
  end


    def set_doctor
      @doctor = @doctor.find(params[:id])
    end






end








