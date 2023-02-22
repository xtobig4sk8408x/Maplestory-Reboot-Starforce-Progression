class StatSerializer < ActiveModel::Serializer
  attributes :id, :str, :dex, :int, :luk, :hp, :mp, :def, :spd, :jump, :atk, :matk
  has_one :equipment
end
