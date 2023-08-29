from rest_framework import viewsets
from .serializers import CardSerializer
from .models import Card


class CardViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows cards to be viewed or edited.
    """
    queryset = Card.objects.all().order_by('-id')
    serializer_class = CardSerializer