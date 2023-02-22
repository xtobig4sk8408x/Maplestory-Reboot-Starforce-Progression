class EquipmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :job
  has_one :equipment_reviews
  has_one :stats
end
