json.partial! "api/users/user", user: @user

polls_ids = []

@user.polls.each do |poll|
    polls_ids << poll.id
end


json.polls_ids polls_ids