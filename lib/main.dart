import 'package:e_commerce_application/common/widgets/bottom_bar.dart';
import 'package:e_commerce_application/constant/global_variable.dart';
import 'package:e_commerce_application/features/admin/screens/admin_screen.dart';
import 'package:e_commerce_application/features/auth/screens/auth_screen.dart';
import 'package:e_commerce_application/features/auth/services/auth_service.dart';
import 'package:e_commerce_application/home/screens/home_screen.dart';
import 'package:e_commerce_application/providers/user_provider.dart';
import 'package:e_commerce_application/router.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(MultiProvider(providers: [
    ChangeNotifierProvider<UserProvider>(
      create: (context) => UserProvider(),
    )
  ], child: const MainApp()));
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  final AuthService authService = AuthService();
  @override
  void initState() {
    authService.getUserData(context);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: "E-Commerce",
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
            scaffoldBackgroundColor: GlobalVariables.backgroundColor,
            colorScheme: const ColorScheme.light(
                primary: GlobalVariables.secondaryColor),
            appBarTheme: const AppBarTheme(elevation: 0),
            iconTheme: const IconThemeData(color: Colors.black)),
        onGenerateRoute: (settings) => generateRoute(settings),
        home: Provider.of<UserProvider>(context).user.token.isNotEmpty
            ? Provider.of<UserProvider>(context).user.type == "user"
                ? const BottomBar()
                : const AdminScreen()
            : const AuthScreen());
  }
}
