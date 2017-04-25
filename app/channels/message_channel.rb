class MessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channel_public_message"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
