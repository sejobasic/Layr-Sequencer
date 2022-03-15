class PatternIdeaSerializer < ActiveModel::Serializer
    attributes :id, :location, :note, :instrument, :fx
  
    has_many :ideas
  end