import 'package:flutter/material.dart';

class TextTitle extends StatelessWidget {
  const TextTitle({super.key, required this.text, this.size = 40});

  final String text;
  final double size;

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      textAlign: TextAlign.center,
      style: TextStyle(
        fontFamily: 'Public Sans',
        fontWeight: FontWeight.w300,
        fontSize: size,
        letterSpacing: -0.7,
        color: Color.fromRGBO(47, 49, 77, 100),
      ),
    );
  }
}

class TextSimple extends StatelessWidget {
  const TextSimple({super.key, required this.text});

  final String text;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(25),
      child: Text(
        text,
        textAlign: TextAlign.center,
        style: const TextStyle(
          fontFamily: 'Public Sans',
          fontWeight: FontWeight.w400,
          fontSize: 15,
          letterSpacing: -0.2,
          color: Color.fromRGBO(47, 49, 77, 100),
        ),
      ),
    );
  }
}
