import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Container(
          width: 150,
          height: 160,
          color: const Color.fromARGB(255, 203, 91, 39),
        ),
        const SizedBox(
          width: 40,
        ),
        Container(
          width: 150,
          height: 160,
          color: const Color.fromARGB(255, 203, 91, 39),
        ),
      ],
    );
  }
}
