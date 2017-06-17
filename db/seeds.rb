User.delete_all
Identity.delete_all
Blurb.delete_all

demo_user_identity = Identity.create!(
  name: "Guest User",
  password_digest: BCrypt::Password.create("secretpass123"),
  email: "email@gmail.com"
)

demo_user = User.create!(
  provider: "identity",
  uid: demo_user_identity.id,
  name: "Guest User"
)
