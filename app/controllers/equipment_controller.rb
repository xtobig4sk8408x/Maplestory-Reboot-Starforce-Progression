class EquipmentController < ApplicationController

  def index
    render json: Equipment.all, status: :ok
  end

  def show
    equipment = find_equip
    render json: equipment, include: :stats, status: :ok
  end

  def create
    equipment = Equipment.create!(equip_params)
    render json: equipment, status: :created
  end

  def update
    equipment = find_equip
    equipment.update!(equip_params)
    render json: equipment, status: :accepted
  end

  def destroy
    equipment = find_equip
    equipment.destroy
    head :no_content
  end

  private
 
    def find_equip
      equipment = Equipment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def equip_params
      params.require(:equipment).permit(:name, :job)
    end
end
