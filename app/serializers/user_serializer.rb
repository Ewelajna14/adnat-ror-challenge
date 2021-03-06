class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :organization_id, :email_address
  belongs_to :organization
  has_many :shifts
end
