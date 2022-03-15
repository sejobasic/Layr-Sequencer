class PatternSerializer < ActiveModel::Serializer
  attributes :id, :location, :note, :instrument, :fx
end
