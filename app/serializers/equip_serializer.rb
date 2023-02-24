class EquipSerializer < ActiveModel::Serializer
  attributes :id, :name, :job, :str, :dex, :int, :luk, :hp, :mp, :def, :spd, :jump, :atk, :matk, :image
end
