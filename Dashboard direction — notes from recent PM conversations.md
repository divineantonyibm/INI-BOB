# Dashboard direction — notes from recent PM conversations  
#   
# The framing  
#   
# Moving from a dashboard to a control tower  
# Current page reports on state; the new one should surface what needs human attention right now  
# Underlying principle: stage stops being the organizing structure and becomes metadata. What the human has to do becomes the structure  
#   
# Remove: global date range picker  
#   
# A control tower is about now, not a time window  
# A date range implies you might miss something outside it — wrong feeling for a queue  
#   
# Remove: observations widget  
#   
# Relic of when the product was about detection volume  
# Unit of value has shifted to investigations, specifically ones waiting on a person  
# Removing it takes away the last reason for any time control on the page  
#   
# Remove: four stage tiles  
#   
# Initially analyzed, probable causes created, remediation created, resolved  
# These describe how the system thinks, not how a user decides what to do next  
# Open thread: "initially analyzed" is really just processing — a transient system state, fast and infrequent. Probably doesn't earn a lane  
#   
# Add: three action queues  
#   
# Tool approvals — investigations where a tool needs human approval  
# Remediation approvals — investigations where a remediation has been found and needs sign-off  
# Proposed policy changes — investigations dismissed as false positives where the agent has proposed a policy or threshold change for review (the self-improving loop)  
#   
# Time becomes ordering, not filtering  
#   
# Each queue sorted oldest-first  
# Visible age on every row ("waiting since" or elapsed), so staleness is legible rather than implied  
#   
# Notifications  
#   
# Bell panel could carry the same three categories — effectively a portable version of the dashboard  
# Lets you see what's waiting without leaving an investigation  
# Badge could be suppressed on the dashboard itself, since it'd point at content already on screen  
#   
# Keep: tracked investigations  
#   
# The one section that isn't action-driven — user-curated bookmarks  
# Sits alongside the queues rather than inside them  
#   
# Still open  
#   
# What the page looks like when nothing needs attention — is empty state a success state?  
# Is there a fourth action class we haven't named?  
