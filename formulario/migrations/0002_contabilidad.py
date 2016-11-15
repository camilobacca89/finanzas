# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-15 21:34
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('formulario', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contabilidad',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('observacion', models.TextField()),
                ('fecha_movimiento', models.DateTimeField(auto_now_add=True)),
                ('entrada', models.IntegerField(default=20)),
                ('salida', models.IntegerField(default=20)),
                ('saldo_general', models.IntegerField(default=20)),
                ('idconcepto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='formulario.Conceptos')),
            ],
        ),
    ]