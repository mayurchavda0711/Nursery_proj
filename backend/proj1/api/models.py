from django.db import models

class UserDetails(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.email


class Order(models.Model):
    order_id = models.CharField(max_length=20, unique=True, editable=False, null=True, blank=True)
    full_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    address = models.TextField()
    city = models.CharField(max_length=100)
    pincode = models.CharField(max_length=10)
    payment_method = models.CharField(max_length=50)
    item_name = models.TextField(default="")  # empty string as default
    qty = models.TextField(default="")        # empty string as default
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.order_id:
            last_order = Order.objects.order_by('id').last()
            order_number = last_order.id + 1 if last_order else 1
            self.order_id = f"ODR_{order_number:03d}"
        super().save(*args, **kwargs)

    def __str__(self):
        return self.order_id
