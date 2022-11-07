import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';

class Button extends StatelessWidget {
  const Button(
      {super.key,
      this.text = 'Access Demo',
      this.color = const Color.fromRGBO(44, 52, 75, 1.0),
      this.icon = Icons.email});

  final String text;
  final Color color;
  final IconData icon;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 46,
      width: 327,
      child: ElevatedButton.icon(
        style: ElevatedButton.styleFrom(
            backgroundColor: color,
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(20))),
        onPressed: () => {
          print('click'),
        },
        icon: Icon(
          icon,
        ),
        label: Text(
          text,
        ),
      ),
    );
  }
}
