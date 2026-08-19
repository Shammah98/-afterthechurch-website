import { gossipChurchResource as baseGossipChurchResource } from "./gossip-church-resource";
import { gossipCoverDataUri } from "./gossip-cover";

export const gossipChurchResource = {
  ...baseGossipChurchResource,
  title: "When Church Gossip Becomes Harmful … a research guide for church leaders",
  deck:
    "A humane, evidence-informed guide to why gossip spreads, how it can damage trust and belonging, and what church leaders can do to build healthier communication without silencing legitimate concerns.",
  image: gossipCoverDataUri,
  imageAlt:
    "Illustration of two congregants whispering during a church service beneath the words I Ain't Gonna Gossip in Church No More."
};
