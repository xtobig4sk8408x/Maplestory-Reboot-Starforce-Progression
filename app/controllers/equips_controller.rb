class EquipsController < ApplicationController
    def index
        equips = Equip.all
        render json: equips, status: :ok
    end
    
    def show
        equip = find_equip
        render json: equip, include: :stats, status: :ok
    end
    
    def create
        equip = Equipment.create!(equip_params)
        render json: equip, status: :created
    end
    
    def update
        equip = find_equip
        equip.update!(equip_params)
        render json: equip, status: :accepted
    end
    
    def destroy
        equip = find_equip
        equip.destroy
        head :no_content
    end
    
    private
     
    def find_equip
        Equip.find(params[:id])
    end
    
    # Only allow a list of trusted parameters through.
    def equip_params
        params.require(:equipment).permit(:name, :job)
    end 
end
