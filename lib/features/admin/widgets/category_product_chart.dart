import 'package:e_commerce_application/model/sales_model.dart';
import 'package:flutter/material.dart';
import 'package:syncfusion_flutter_charts/charts.dart' as charts;
import 'package:syncfusion_flutter_charts/sparkcharts.dart' as charts;

class CategoryProductsChart extends StatelessWidget {
  final List<charts.BarSeries<Sales, String>> seriesList;
  const CategoryProductsChart({
    Key? key,
    required this.seriesList,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        child: charts.SfSparkBarChart(
      data: <double>[18, 24, 30, 14, 28],
    ));
  }
}
