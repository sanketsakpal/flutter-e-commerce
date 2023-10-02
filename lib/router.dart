import 'package:e_commerce_application/address/screens/address_screen.dart';
import 'package:e_commerce_application/common/widgets/bottom_bar.dart';
import 'package:e_commerce_application/features/admin/screens/add_product_screen.dart';
import 'package:e_commerce_application/features/auth/screens/auth_screen.dart';
import 'package:e_commerce_application/features/order_detail/screens/order_details.dart';
import 'package:e_commerce_application/features/search/screens/search_screen.dart';
import 'package:e_commerce_application/home/screens/category_screen.dart';
import 'package:e_commerce_application/home/screens/home_screen.dart';
import 'package:e_commerce_application/model/model.dart';
import 'package:e_commerce_application/model/product_model.dart';
import 'package:flutter/material.dart';

import 'features/product_detail/screens/product_details_screen.dart';

Route<dynamic> generateRoute(RouteSettings routeSettings) {
  switch (routeSettings.name) {
    case AuthScreen.routeName:
      return MaterialPageRoute(
        builder: (context) => const AuthScreen(),
        settings: routeSettings,
      );
    case HomeScreen.routeName:
      return MaterialPageRoute(
        builder: (context) => const HomeScreen(),
        settings: routeSettings,
      );
    case BottomBar.routeName:
      return MaterialPageRoute(
        builder: (context) => const BottomAppBar(),
        settings: routeSettings,
      );
    case AddProductScreen.routeName:
      return MaterialPageRoute(
        builder: (context) => const AddProductScreen(),
        settings: routeSettings,
      );
    case CategoryDealsScreen.routeName:
      var category = routeSettings.arguments as String;
      return MaterialPageRoute(
        builder: (context) => CategoryDealsScreen(
          category: category,
        ),
        settings: routeSettings,
      );

    case SearchScreen.routeName:
      var searchQuery = routeSettings.arguments as String;
      return MaterialPageRoute(
        builder: (context) => SearchScreen(searchQuery: searchQuery),
        settings: routeSettings,
      );
    case ProductDetailScreen.routeName:
      var product = routeSettings.arguments as Product;
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => ProductDetailScreen(
          product: product,
        ),
      );
    case AddressScreen.routeName:
      var totalAmount = routeSettings.arguments as String;
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => AddressScreen(
          totalAmount: totalAmount,
        ),
      );
    case OrderDetailScreen.routeName:
      var order = routeSettings.arguments as Order;
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (_) => OrderDetailScreen(
          order: order,
        ),
      );
    default:
      return MaterialPageRoute(
        builder: (context) => const Scaffold(
          body: Center(
            child: Text("Screen Does't exist "),
          ),
        ),
        settings: routeSettings,
      );
  }
}
