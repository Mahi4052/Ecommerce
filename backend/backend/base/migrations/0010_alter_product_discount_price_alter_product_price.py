# Generated by Django 4.1.7 on 2024-02-27 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_alter_product_discount_price_alter_product_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='discount_price',
            field=models.CharField(blank=True, max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.CharField(blank=True, max_length=12, null=True),
        ),
    ]
