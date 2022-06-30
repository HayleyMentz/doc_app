class Api::AppointmensController < ApplicationController

  before_action :set_user
  before_action :set_appointment, only: [:show, :update, :destroy]

  def index
    render json: @user.appointment
  end

  def show
    render json: @appointment
  end

  def create
    @appointment = @user.appointment.new(appointment_params)
    if @appointment.save 
      render json: @appointment
    else
      render json: { errors: @appointment.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: { errors: @appointment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @appointment.destroy
    render json: { message: 'Appointment Deleted' }
  end

  private 
    def appointment_params
      params.require(:appointment).permit(:tite, :desc, :date, :time)
    end

    def set_user
      @user = User.find(params[:user_id])
    end

    def set_appointment
      @appointment = @user.appointment.find(params[:id])
    end








end
