class IdeaSerializer < ActiveModel::Serializer
  attributes :id, :saved_ideas, :genre, :note
  belongs_to :user
end
