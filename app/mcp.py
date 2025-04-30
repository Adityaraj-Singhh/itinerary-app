from fastapi import APIRouter
from typing import Dict

router = APIRouter()

RECOMMENDATIONS = {
    2: "2-Night Trip: Phuket City + Phi Phi Island",
    3: "3-Night Trip: Krabi + Phuket + James Bond Island",
    4: "4-Night Trip: Island hopping + Snorkeling + Safari",
    5: "5-Night Trip: Phuket Old Town, Krabi Beaches, Tiger Cave Temple, Phi Phi Sunset Cruise, Night Market",
    6: "6-Night Trip: Island tour, Water sports, Cultural tour, Jungle Safari, Spa Day, Fire Show at Patong Beach",
    7: "7-Night Trip: Phuket City, Krabi 4-Island Tour, Railay Beach, Elephant Sanctuary, Thai Cooking Class, ATV Adventure, Sunset Cruise",
    8: "8-Night Trip: Full experience: Phuket + Krabi + Coral Island + Bamboo Island + Jungle Trekking + Scuba Diving + Local Village Tour + Leisure Day"
}

@router.get("/recommend/{nights}")
def recommend_itinerary(nights: int) -> Dict[str, str]:
    recommendation = RECOMMENDATIONS.get(nights, "No recommendation available")
    return {"recommended_itinerary": recommendation}
