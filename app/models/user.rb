class User < ApplicationRecord
    # This macro along with bcrypt allows us to save passwords to our database that are secure
    has_secure_password

    has_many :ideas, dependent: :destroy
    has_many :patterns, through: :ideas

    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
end
